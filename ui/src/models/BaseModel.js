export default class BaseModel {
  constructor(api) {
    this.baseApi = "https://airbus-aerothon19.herokuapp.com";
    this.api = api;
  }

  getAll = () => {
    return fetch(`${this.baseApi}/${this.api}`).then(data => data.json());
  };

  find = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`).then(data => data.json());
  };

  create = data => {
    return fetch(`${this.baseApi}/${this.api}`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(data => data.json());
  };

  delete = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "delete"
    }).then(data => data.json());
  };

  update = (id, data) => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(data => data.json());
  };
}
