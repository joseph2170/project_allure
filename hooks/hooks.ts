import { Before } from '@cucumber/cucumber';
import { fixture } from './pageFixture';

Before(async () => {
  await fixture.page.goto('https://www.saucedemo.com');

  await fixture.page.fill('#user-name', 'standard_user');
  await fixture.page.fill('#password', 'secret_sauce');
  await fixture.page.click('#login-button');
});