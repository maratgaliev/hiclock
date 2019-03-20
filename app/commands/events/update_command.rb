class Events::UpdateCommand < BaseCommand

  step :find
  step :validate
  step :update

  def find(id:, params:)
    event = Event.find(id)
    if event
      Success(event: event, params: params)
    else
      Failure(error(I18n.t('errors.events.not_found')))
    end
  end

  def validate(event:, params:)
    form = Events::Form.call(params)

    if form.success?
      Success(event: event, params: form.to_h)
    else
      Failure(form.errors)
    end
  end

  def update(event:, params:)
    event.assign_attributes(params)

    if event.save
      Success(event)
    else
      Failure(error(I18n.t('errors.base')))
    end
  end
end