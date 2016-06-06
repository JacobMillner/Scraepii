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

#homer theme
#JS
Rails.application.config.assets.precompile += %w( jquery-ui.min.js )
Rails.application.config.assets.precompile += %w( jquery.min.js )
Rails.application.config.assets.precompile += %w( jquery.slimscroll.min.js )
Rails.application.config.assets.precompile += %w( bootstrap.min.js )
Rails.application.config.assets.precompile += %w( metisMenu.min.js )
Rails.application.config.assets.precompile += %w( icheck.min.js )
Rails.application.config.assets.precompile += %w( sprakline-index.js )
Rails.application.config.assets.precompile += %w( homer.js )
#css
Rails.application.config.assets.precompile += %w( homer/font-awesome.css )
Rails.application.config.assets.precompile += %w( homer/metisMenu.css )
Rails.application.config.assets.precompile += %w( homer/animate.css )
Rails.application.config.assets.precompile += %w( homer/bootstrap.css )
Rails.application.config.assets.precompile += %w( homer/pe-icon-7-stroke.css )
Rails.application.config.assets.precompile += %w( homer/helper.css )
Rails.application.config.assets.precompile += %w( homer/homer-style.css )


# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
