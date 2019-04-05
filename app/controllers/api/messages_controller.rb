class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where(('id > ?', params[:message_id]))
  end
end
