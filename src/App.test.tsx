import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('load header', () => {
  render(<App />);
  const element = screen.getByText(/Materialize Config/i);
  expect(element).toBeInTheDocument();
});
test('load cluster component', () => {
  render(<App />);
  const element = screen.getByText(/Cluster/i);
  expect(element).toBeInTheDocument();
});
test('load secret component', () => {
  render(<App />);
  const element = screen.getByText(/Secret/i);
  expect(element).toBeInTheDocument();
});
test('load postgres connection component', () => {
  render(<App />);
  const element = screen.getByText(/Postgres Connection/i);
  expect(element).toBeInTheDocument();
});
test('load kafka connection component', () => {
  render(<App />);
  const element = screen.getByText(/Kafka Connection/i);
  expect(element).toBeInTheDocument();
});
test('load schema registry connection component', () => {
  render(<App />);
  const element = screen.getByText(/Schema Registry Connection/i);
  expect(element).toBeInTheDocument();
});
test('load kafka source component', () => {
  render(<App />);
  const element = screen.getByText(/Kafka Source/i);
  expect(element).toBeInTheDocument();
});
