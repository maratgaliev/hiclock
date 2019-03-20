Events::Form = Dry::Validation.Params do
  #required(:start_time).filled(:str?)
  #required(:stop_time).filled(:str?)

  # validate(first_date: [:id, :start_time]) do |id, start_time|
  #   id.present? && start_time.present?
  # end


  # validate(check_dates: [:start_time, :stop_time]) do |start_time, stop_time|
  #   stop_time.present? && stop_time > start_time
  # end
end