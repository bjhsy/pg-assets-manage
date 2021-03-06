import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import LedgerList from "./views/ledger/Ledger";
import LedgerRegister from "./views/ledger/Register";
import ClassesManage from "./views/classes/Manage";

export default function() {
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to={{ pathname: "/ledger/list" }} />
        <Route path="/ledger/list" component={LedgerList} />
        <Route path="/ledger/register" component={LedgerRegister} />
        <Route path="/classes/manage" component={ClassesManage} />
      </Switch>
    </Router>
  );
}
