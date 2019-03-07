export default class BaseModel {
  constructor(api) {
    this.baseApi = "http://localhost:3001";
    this.api = api;
  }

  getAll = () => {
    return fetch(`${this.baseApi}/${this.api}`).then(data => data.json());
  };

  find = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`).then(data => data.json());
  };

  create = data => {
    console.log(data);
    // return fetch(`${this.baseApi}/${this.api}`, {
    //   method: "post",
    //   body: JSON.stringify(data)
    // }).then(data => data.json());
  };

  delete = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "delete"
    }).then(data => data.json());
  };

  update = (id, data) => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "put",
      body: JSON.stringify(data)
    }).then(data => data.json());
  };
}
