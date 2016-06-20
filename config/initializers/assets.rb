# Be sure to restart your server when you modify this file.
Dir.glob("#{Rails.root}/app/assets/images/**/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/javascripts/**/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/stylesheets/**/").each do |path|
  Rails.application.config.assets.paths << path
end
# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

Rails.application.config.assets.precompile += %w( highcharts.js )
Rails.application.config.assets.precompile += %w( darkly.css )
Rails.application.config.assets.precompile += %w( darkly.js )
Rails.application.config.assets.precompile += %w( datagrid.css )
Rails.application.config.assets.precompile += %w( home.css )
Rails.application.config.assets.precompile += %w( static_pages.coffee )

#homer theme
#JS
Rails.application.config.assets.precompile += %w( jquery-ui.min.js )
Rails.application.config.assets.precompile += %w( jquery.min.js )
Rails.application.config.assets.precompile += %w( jquery.slimscroll.min.js )
Rails.application.config.assets.precompile += %w( bootstrap.min.js )
Rails.application.config.assets.precompile += %w( metisMenu.min.js )
Rails.application.config.assets.precompile += %w( icheck.min.js )
Rails.application.config.assets.precompile += %w( sparkline-index.js )
Rails.application.config.assets.precompile += %w( homer.js )
Rails.application.config.assets.precompile += %w( jquery.flot.js )
Rails.application.config.assets.precompile += %w( jquery.flot.resize.js )
Rails.application.config.assets.precompile += %w( jquery.flot.pie.js )
Rails.application.config.assets.precompile += %w( curvedLines.js )
Rails.application.config.assets.precompile += %w( jquery.flot.spline.js )
Rails.application.config.assets.precompile += %w( jquery.peity.min.js )
Rails.application.config.assets.precompile += %w( charts.js )

#css
Rails.application.config.assets.precompile += %w( font-awesome.css )
Rails.application.config.assets.precompile += %w( metisMenu.css )
Rails.application.config.assets.precompile += %w( animate.css )
Rails.application.config.assets.precompile += %w( bootstrap.css )
Rails.application.config.assets.precompile += %w( pe-icon-7-stroke.css )
Rails.application.config.assets.precompile += %w( helper.css )
Rails.application.config.assets.precompile += %w( homer-style.css )


# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
