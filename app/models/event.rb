class Event < ApplicationRecord
  belongs_to :user, optional: true
  scope :ordered, -> { order(start_time: :desc) }
  def as_json(*)
    super.except("created_at", "updated_at").tap do |hash|
      hash["user_name"] = self.user ? self.user.email : self.user_name
    end
  end
end
