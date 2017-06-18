# Learn promises

Promises act as a mechanism alternative to callbacks for delivering results of a single asynchronous operation.
A *promise object* is a placeholder for the result (not ready yet) that will be delivered through the object itself.

## Three states of a promise

* *pending* (or *unsettled*): once initialize and the result is not ready yet
* *fulfilled*: the asynchronous operation completed successfully and the result is ready
* *rejected*: the operation failed (no result can be delivered)

A Promise can change the state only one time from *unsettled* to *settled* (fulfilled or rejected). Once a Promise is settled the state cannot be changed anymore.

To send a Promise in a *settled* state only two actions can be performed:

* *Reject*: the promise become settled and *rejected*
* *Resolve*: the promise become settled and *fulfilled*.

The promise can be resolved with different types of values:

* with a *non-thenable* value
* with a *thenable* value

## Thenable value

A *thenable* is an object that has a Promise-style contract with a *then()* method.
When on a Promise *P* a resolve action is performed with a *thenable* object *Q*, the P cannot be resolved anymore, but it's state is unsettled until the Q object is fulfilled or rejected.
