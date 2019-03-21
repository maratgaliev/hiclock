class Api::V1::EventsController < BaseController
  swagger_controller :events, 'Events'

  swagger_api :index do
    summary 'Get all the events'
    notes 'Should be used for fetching all events'
    response :ok, "Success"
  end
  swagger_api :create do
    summary 'Creating event'
    notes 'Should be used for creating events'
    param :form, 'event[start_time]', :datetime, :required, 'start_time'
  end
  swagger_api :show do
    summary 'Get event'
    notes 'Should be used for fetching a event'
    param :path, :id, :string, :id
    response :ok, "Success"
  end
  swagger_api :destroy do
    summary 'Destroy event'
    notes 'Should be used for destroying a event'
    param :path, :id, :string, :id
    response :ok, "Success"
  end

  rescue_from ActiveRecord::RecordNotFound do
    head :not_found
  end

  def index
    Events::Query.index_query(::LoginService.call(request), params) do |q|
      q.success {|events| api_response(events) }
      q.failure {|errors| error_response(errors) }
    end
  end

  def show
    run_command(Events::ShowCommand, id: params[:id])
  end

  def create
    run_command(Events::CreateCommand, user_id: ::LoginService.call(request), params: event_params)
  end

  def update
    Events::UpdateCommand.run(id: params[:id], params: event_params) do |m|
      m.success {|event| api_response(event) }
      m.failure {|errors| error_response(errors) }
    end
  end

  def destroy
    Events::DestroyCommand.run(id: params[:id], user: current_user) do |m|
      m.success { head :ok }
      m.failure {|errors| error_response(errors) }
    end
  end

  private

  def event_params
    params.require(:event).permit([:start_time, :stop_time, :user_name, :reason])
  end
end
