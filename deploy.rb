#!/usr/bin/env ruby
# frozen_string_literal: true

require "bundler/inline"

gemfile do
  source "https://rubygems.org"
  gem "baseline", github: "manuelmeurer/baseline"
end

path = Bundler.rubygems.find_name("baseline").first.full_gem_path

`#{path}/bin/deploy`
