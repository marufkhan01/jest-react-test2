import { validateEmail, validatePassword } from '../utils/validation';

it('passes on valid email', () => {
    const email = 'mmhkhan@kth.se';
    expect(validateEmail(email)).toEqual(true);

});

it('fails on invalid email', () => {
    const email = 'mmhkhan.kth.se';
    expect(validateEmail(email)).toEqual(false);

});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
    const password = 'Subashkhan6';
    expect(validatePassword(password)).toEqual(true);

});

it('invalid password: missing digit', () => {
    const password = 'Subashkhan';
    expect(validatePassword(password)).toEqual(false);
 
});

it('invalid password: missing 1 uppercase', () => {
    const password = 'subashkhan6';
    expect(validatePassword(password)).toEqual(false);

});
