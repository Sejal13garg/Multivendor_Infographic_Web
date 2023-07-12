import React from "react";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";

export default function Admindashboard() {
  return (
    <div>
      <Layout>
        <div class="list-group text-center">
          <NavLink
            to="/admindashboard/createcategory"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/admindashboard/createproduct"
            class="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>

          <NavLink
            to="/admindashboard/createuser"
            class="list-group-item list-group-item-action"
          >
            Create Internal Users
          </NavLink>
          <NavLink
            to="/admindashboard/userlist"
            class="list-group-item list-group-item-action"
          >
            User List
          </NavLink>
        </div>
      </Layout>
    </div>
  );
}
