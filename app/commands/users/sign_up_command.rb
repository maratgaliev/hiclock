class Users::SignUpCommand < BaseCommand
  step :validate
  step :persist

  def validate(params)
    form = Users::SignUpForm.call(params)
    if form.success?
      Success(form.to_h)
    else
      Failure(form.errors)
    end
  end

  def persist(attributes)
    user = User.new(attributes)

    if user.save
      Success(user)
    else
      Failure(user.errors.messages)
    end
  end
end