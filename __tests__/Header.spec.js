import Header from '@/components/global/Header.vue'
import { render } from '@testing-library/vue'

describe('Header.vue', () => {
  it('renders title of header', () => {
    const { getByText } = render(Header)
    expect(getByText('Make Your Tea')).toBeTruthy()
  })
})
