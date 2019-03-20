class Events::ShowCommand < BaseCommand
  step :get
  def get(id:)
    event = Event.find_by(id: id)
    event ? Success(event) : Failure(error(I18n.t('errors.events.not_found')))
  end
end