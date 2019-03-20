Users::SignUpForm = Dry::Validation.Params do
  configure do

    def email?(value)
      !Devise.email_regexp.match(value).nil?
    end

    def password?(value)
      value.length.in?(Devise.password_length)
    end
  end

  required(:email).filled(:str?, :email?)
  required(:password).filled(:str?, :password?)
end