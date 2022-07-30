import { render, screen } from '@testing-library/react';
import _ from 'lodash';
import App from './App';

test('load header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Materialize Config/i);
  expect(linkElement).toBeInTheDocument();
});
test('load cluster component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cluster/i);
  expect(linkElement).toBeInTheDocument();
});
test('load secret component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Secret/i);
  expect(linkElement).toBeInTheDocument();
});
test('load postgres connection component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Postgres Connection/i);
  expect(linkElement).toBeInTheDocument();
});
test('load kafka connection component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kafka Connection/i);
  expect(linkElement).toBeInTheDocument();
});
test('load schema registry connection component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Schema Registry Connection/i);
  expect(linkElement).toBeInTheDocument();
});
test('load kafka source component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kafka Source/i);
  expect(linkElement).toBeInTheDocument();
});
