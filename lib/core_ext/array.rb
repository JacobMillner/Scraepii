class Array
  def each_with_prev_next &block
    [nil, *self, nil].each_cons(3, &block)
  end
end