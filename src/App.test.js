import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Celsius to Fahrenheit title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Celsius to Fahrenheit Temperature Converter/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Degrees C Label', () => {
  render(<App />);
  const linkElement = screen.getByText(/Degrees C:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Degrees F Label', () => {
  render(<App />);
  const linkElement = screen.getByText(/Degrees F:/i);
  expect(linkElement).toBeInTheDocument();
});

test('It should give the right value in farenheit', () => {
  render(<App />);
  const celsiusInput = screen.getByLabelText('Degrees C:') // Gets Celcius Input
  fireEvent.change(celsiusInput, {target: {value: '23'}}) // Sets Celsius Input at 23, does `on change`
  expect(celsiusInput.value).toBe('23') // Checks Celcius input is set correctly
  fireEvent.blur(screen.getByLabelText('Degrees C:')) // Triggers on blur action to submit the Celcius input
  const fahrenheitInput = screen.getByLabelText('Degrees F:') // Gets Farenheit Output
  expect(fahrenheitInput.value).toBe('73.4') // Checks Farenheit Output is as expected
})

test('It should give the right value in celsius', () => {
  render(<App />);
  const fahrenheitInput = screen.getByLabelText('Degrees F:') 
  fireEvent.change(fahrenheitInput, {target: {value: '68'}}) 
  expect(fahrenheitInput.value).toBe('68') 
  fireEvent.blur(screen.getByLabelText('Degrees F:')) 
  const celsiusInput = screen.getByLabelText('Degrees C:') 
  expect(celsiusInput.value).toBe('20') 
})






