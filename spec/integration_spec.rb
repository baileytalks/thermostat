feature 'Thermostat' do

  scenario 'navigation' do
    visit '/'
    expect(page).to have_content 'thermobot'
  end

end
