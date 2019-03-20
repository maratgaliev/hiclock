class Events::Query
  include Dry::Transaction
  PER_PAGE = 100
  step :events_scope
  step :paginate

  def self.index_query(user_id, params = {}, &block)
    new.call(user_id: user_id, params: params, &block)
  end

  def events_scope(user_id:, params:)
    data = Event.all
    data = data.where(user_id: user_id) if user_id
    Success(events: data, params: params)
  end

  def paginate(events:, params:)
    Success(events.ordered.paginate(page: params[:page], per_page: PER_PAGE))
  end
end