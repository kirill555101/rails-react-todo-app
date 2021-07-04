class ApplicationController < ActionController::API
    SECRET_TOKEN = 'this_is_secret_token'

    before_action :session_user

    def encode_token(payload)
        JWT.encode(payload, SECRET_TOKEN)
    end

    def session_user
        decoded_hash = decoded_token
        unless decoded_hash == nil || decoded_hash.empty?
            user_id = decoded_hash[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def get_auth_header
        request.headers['Authorization']
    end

    def decoded_token
        auth_header = get_auth_header
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, SECRET_TOKEN, true, { algorithm: 'HS256' })
            rescue JWT::DecodeError
                []
            end
        end
    end
end
