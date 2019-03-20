class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :trackable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist
  has_many :events
end
