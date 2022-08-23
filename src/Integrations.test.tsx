import React from 'react';
import { render, screen } from '@testing-library/react';
import Integrations from './Integrations';

test('load header', () => {
  render(<Integrations />);
  const linkElement = screen.getByText(/Materialize Config/i);
  expect(linkElement).toBeInTheDocument();
});

test('load confluent cloud component', () => {
  render(<Integrations />);
  const confluentElement = screen.getByText(/Confluent Cloud/i);
  expect(confluentElement).toBeInTheDocument();
  const redpandaElement = screen.getByText(/Redpanda Cloud/i);
  expect(redpandaElement).toBeInTheDocument();
  const upstashElement = screen.getByText(/Upstash Kafka/i);
  expect(upstashElement).toBeInTheDocument();
  const mskElement = screen.getByText(/AWS MSK/i);
  expect(mskElement).toBeInTheDocument();
});
