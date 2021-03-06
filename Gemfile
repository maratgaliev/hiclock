source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'rails', '~> 5.2.2'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'rubocop', require: false
gem 'rubocop-rspec'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'pry-doc'
  gem 'rspec-rails'
  gem 'rspec-its'
  gem 'annotate'
  gem 'bullet'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'database_cleaner'
  gem 'faker'
  gem 'factory_bot', '4.8.2'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'active_model_serializers'
gem 'devise', '>= 4.6.0'
gem 'devise-jwt'
gem 'dry-validation'
gem 'dry-transaction'
gem 'will_paginate'
gem 'rack-cors'
gem 'swagger-docs'
gem 'foreman'