# -*- encoding: utf-8 -*-
# stub: factory_bot_rails 5.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "factory_bot_rails"
  s.version = "5.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Joe Ferris"]
  s.date = "2019-04-14"
  s.description = "factory_bot_rails provides integration between factory_bot and rails 4.2 or newer"
  s.email = "jferris@thoughtbot.com"
  s.homepage = "https://github.com/thoughtbot/factory_bot_rails"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.1"
  s.summary = "factory_bot_rails provides integration between factory_bot and rails 4.2 or newer"

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<factory_bot>, ["~> 5.0.2"])
      s.add_runtime_dependency(%q<railties>, [">= 4.2.0"])
    else
      s.add_dependency(%q<factory_bot>, ["~> 5.0.2"])
      s.add_dependency(%q<railties>, [">= 4.2.0"])
    end
  else
    s.add_dependency(%q<factory_bot>, ["~> 5.0.2"])
    s.add_dependency(%q<railties>, [">= 4.2.0"])
  end
end
