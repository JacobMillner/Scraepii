# Load the Rails application.
require File.expand_path('../application', __FILE__)

APP_VERSION = `git --git-dir="#{Rails.root.join(".git")}" --work-tree="#{Rails.root}" log -1 --date=short --format="%ad-%h"|sed 's/-/./g'`

# Initialize the Rails application.
Rails.application.initialize!
