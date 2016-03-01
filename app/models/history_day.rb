class HistoryDay < ActiveRecord::Base
  belongs_to :stock_datum
  default_scope { order('date DESC') }
end
