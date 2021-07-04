require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get login" do
    get sessions_login_url
    assert_response :success
  end

  test "should get register" do
    get sessions_register_url
    assert_response :success
  end
end
