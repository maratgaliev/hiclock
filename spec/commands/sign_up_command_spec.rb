describe Users::SignUpCommand do

  let(:command) { described_class.new }

  context 'email error' do
    it 'email already exists' do
      user = FactoryBot.create(:user)

      result = command.call(email: user.email, password: 'password')

      expect(result.failure?).to be_truthy
      expect(result.failure).to eq(email: ['has already been taken'])
    end
  end

  context 'success save' do
    let(:result) { command.call(email: 'test@test.com', password: 'password') }

    subject { result }

    its(:success?) { is_expected.to be_truthy }

    describe 'user' do
      subject { result.value! }

      its(:persisted?) { is_expected.to be_truthy }
      its(:email) { is_expected.to eq 'test@test.com' }
    end
  end
end