class Events::DestroyCommand < BaseCommand
  step :authorize
  step :destroy

  def authorize(id:, user:)
    issue = Event.find(id)

    if issue
      Success(issue)
    else
      Failure(error(I18n.t('errors.events.not_found')))
    end
  end

  def destroy(event)
    event.delete
    Success(:deleted)
  end
end