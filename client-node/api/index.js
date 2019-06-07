import $axios from 'axios'

export let queryAllUsers = () => {
  return $axios.get('/users/all');
}
