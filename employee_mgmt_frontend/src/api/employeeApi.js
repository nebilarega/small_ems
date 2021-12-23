class employeeApi {
  static url = "http://127.0.0.1:5001";
  static requestHeaders() {
    // return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    return {};
  }

  static getAllEmployees() {
    const headers = this.requestHeaders();
    const request = new Request(`${this.url}/api/employee?`, {
      method: "GET",
      headers: headers,
    });

    return fetch(request);
  }
  static createEmployee(employee) {
    const headers = Object.assign(
      {
        "Content-Type": "application/json",
      },
      this.requestHeaders()
    );
    const request = new Request(`${this.url}/api/employee`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(employee),
    });

    return fetch(request);
  }

  static updateEmployee(employeeId, employee) {
    const headers = Object.assign(
      {
        "Content-Type": "application/json",
      },
      this.requestHeaders()
    );
    const request = new Request(`${this.url}/api/employee/${employeeId}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        employee: employee,
      }),
    });

    return fetch(request);
  }

  static deleteEmployee(employee) {
    const headers = Object.assign(
      {
        "Content-Type": "application/json",
      },
      this.requestHeaders()
    );
    const request = new Request(`${this.url}/api/employee/${employee}`, {
      method: "DELETE",
      headers: headers,
    });

    return fetch(request);
  }

  static deleteBulkEmployee(docIds) {
    const headers = Object.assign(
      {
        "Content-Type": "application/json",
      },
      this.requestHeaders()
    );
    const request = new Request(`${this.url}/api/employee`, {
      mode: "no-cors",
      method: "DELETE",
      headers: headers,
      body: JSON.stringify({
        docIds: docIds,
      }),
    });

    return fetch(request);
  }
}

export default employeeApi;
