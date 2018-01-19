import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should get the user from localStorage', () => {
  const user = 'Maruf';
  localStorage.setItem('user',user);
  const getUser = localStorageUtils.getUserFromLocalStorage();
  expect(localStorage.getItem).toHaveBeenCalled();
  expect(getUser).toBe(user);

});

it('should get empty user from localStorage', () => {
  const getUser = localStorageUtils.getUserFromLocalStorage();
  expect(localStorage.getItem).toHaveBeenCalled();
  expect(getUser).toBeFalsy();

});

