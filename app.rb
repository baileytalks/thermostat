require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions
  set :session_secret, '123456789'

  get '/' do
    erb :index
  end
end
