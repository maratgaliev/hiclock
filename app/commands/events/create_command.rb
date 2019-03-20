class Events::CreateCommand < BaseCommand
  step :validate
  step :persist
  def validate(user_id:, params:)
    form = Events::Form.call(params)

    if form.success?
      Success(user_id: user_id, params: form.to_h)
    else
      Failure(form.errors)
    end
  end

  def persist(user_id:, params:)
    event = Event.new(params)
    if user_id
      event.user_id = user_id
    end
    if event.save!
      Success(event)
    else
      Failure(error(I18n.t('errors.base')))
    end
  end
end