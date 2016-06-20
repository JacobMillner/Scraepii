Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.cache_classes = true

  # Eager load code on boot. This eager loads most of Rails and
  # your application in memory, allowing both threaded web servers
  # and those relying on copy on write to perform better.
  # Rake tasks automatically ignore this option for performance.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Enable Rack::Cache to put a simple HTTP cache in front of your application
  # Add `rack-cache` to your Gemfile before enabling this.
  # For large-scale production use, consider using a caching reverse proxy like
  # NGINX, varnish or squid.
  # config.action_dispatch.rack_cache = true

  # Disable serving static files from the `/public` folder by default since
  # Apache or NGINX already handles this.
  config.serve_static_files = ENV['RAILS_SERVE_STATIC_FILES'].present?

  # Compress JavaScripts and CSS.
  config.assets.js_compressor = :uglifier
  # config.assets.css_compressor = :sass

  # Do not fallback to assets pipeline if a precompiled asset is missed.
  config.assets.compile = false

  # Asset digests allow you to set far-future HTTP expiration dates on all assets,
  # yet still be able to expire them through the digest params.
  config.assets.digest = true

  # `config.assets.precompile` and `config.assets.version` have moved to config/initializers/assets.rb

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = 'X-Sendfile' # for Apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for NGINX

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # Use the lowest log level to ensure availability of diagnostic information
  # when problems arise.
  config.log_level = :debug

  # Prepend all log lines with the following tags.
  # config.log_tags = [ :subdomain, :uuid ]

  # Use a different logger for distributed setups.
  # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)

  # Use a different cache store in production.
  # config.cache_store = :mem_cache_store

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.action_controller.asset_host = 'http://assets.example.com'

  # Ignore bad email addresses and do not raise email delivery errors.
  # Set this to true and configure the email server for immediate delivery to raise delivery errors.
  # config.action_mailer.raise_delivery_errors = false

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation cannot be found).
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners.
  config.active_support.deprecation = :notify

  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false

  config.assets.precompile += %w( highcharts.js )
  config.assets.precompile += %w( datagrid.css )
  config.assets.precompile += %w( home.css )
  config.assets.precompile += %w( static_pages.coffee )

#homer theme
#JS
  config.assets.precompile += %w( jquery-ui.min.js )
  config.assets.precompile += %w( jquery.min.js )
  config.assets.precompile += %w( jquery.slimscroll.min.js )
  config.assets.precompile += %w( bootstrap.min.js )
  config.assets.precompile += %w( metisMenu.min.js )
  config.assets.precompile += %w( icheck.min.js )
  config.assets.precompile += %w( sparkline-index.js )
  config.assets.precompile += %w( homer.js )
  config.assets.precompile += %w( jquery.flot.js )
  config.assets.precompile += %w( jquery.flot.resize.js )
  config.assets.precompile += %w( jquery.flot.pie.js )
  config.assets.precompile += %w( curvedLines.js )
  config.assets.precompile += %w( jquery.flot.spline.js )
  config.assets.precompile += %w( jquery.peity.min.js )
  config.assets.precompile += %w( charts.js )

  #css
  config.assets.precompile += %w( homer/font-awesome.css )
  config.assets.precompile += %w( homer/metisMenu.css )
  config.assets.precompile += %w( homer/animate.css )
  config.assets.precompile += %w( homer/bootstrap.css )
  config.assets.precompile += %w( homer/pe-icon-7-stroke.css )
  config.assets.precompile += %w( homer/helper.css )
  config.assets.precompile += %w( homer/homer-style.css )


end
