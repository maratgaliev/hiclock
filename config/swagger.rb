include Swagger::Docs::ImpotentMethods

class Swagger::Docs::Config
  def self.base_api_controller
    BaseController
  end
end


Swagger::Docs::Config.register_apis({
                                        "1.0": {
                                            api_extension_type: :json,
                                            controller_base_path: '',
                                            base_api_controller: 'BaseController',
                                            api_file_path: 'public/apidocs',
                                            base_path: "https://hiclock-api.herokuapp.com/",
                                            clean_directory: true,
                                            attributes: {
                                                info: {
                                                    "title": "HiClock.ru API docs",
                                                    "description": "Control your events.",
                                                    "contact": "kazanlug@gmail.com",
                                                    "license": "MIT"
                                                }
                                            }
                                        }
                                    })