class LoginService
  def self.call(request)
    token = request.headers['Authorization']
    pattern = /^Bearer /
    header_token = token.gsub(pattern, '') if token && token.match(pattern)
    begin
      jwt_payload = JWT.decode(header_token, Rails.application.secrets.secret_key_base).first
      @current_user_id = jwt_payload['sub']&.to_i
    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
      nil
    end
  end
end