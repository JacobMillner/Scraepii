class DayTrend < ActiveRecord::Base
  enum type: [ :up, :down, :sideways ]
end
