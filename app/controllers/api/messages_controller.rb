class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where(message.id > id)
  end
end
