import React from 'react';
import faqsData from '../fixtures/faqs';
import { Accordion, OptForm } from '../components';

export default function FaqsContainer() {
    return (
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map(({ id, header, body }) => (
          <Accordion.Item key={id}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        ))}

        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restard your membership
          </OptForm.Text>
        </OptForm>
      </Accordion>
    );
}
