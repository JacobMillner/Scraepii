set :application, 'uptik'
set :repo_url, 'git@github.com:Zetsuboushita/Scraepii.git'
set :deploy_to, '/opt/www/uptik'
set :deploy_via, :remote_cache
set :user, 'deploy'
set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets}
set :pty, true
set :use_sudo, false
set :runner, 'uptik'
set :unicorn_service, -> { "unicorn_#{fetch(:application)}" }


namespace :deploy do

  %w[start stop restart].each do |command|
    desc 'Manage Unicorn'
    task command do
      on roles(:app), in: :sequence, wait: 1 do
        execute "/etc/init.d/unicorn_#{fetch(:application)} #{command}"
      end
    end
  end

  after :publishing, :restart

end
