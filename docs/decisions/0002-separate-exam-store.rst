2. Use independent exam redux store
-----------------------------------------

Status
------

Approved

Context
-------

We want special exam lib to have its own state. This state is intended to keep active exam related data
and active exam attempt data for the timer feature.

Special exams library can use but should not affect the learning app state.

When it comes to implementation of nested stores like

.. code-block:: javascript
    <AppProvider store={learningAppStore}>  // Learning app store provider
      ...
      <SpecialExamLib>
        <Provider store={specialExamsLibStore}>
          ...
        </Provider>
      </SpecialExamLib>
      ...
    </AppProvider>

it turns out that it is not possible to access `learningAppStore` by using `connect` functionality
because it becomes being masked by nested provider's context.

Decision
--------

Use redux store low-level api directly (https://redux.js.org/api/store) to avoid nesting providers.

Access parent store in immutable way
====================================

In case whan there is a need to refer to any external state value, redux provides

Consequences
------------

This organization has been implemented in several of our micro-frontends so far (frontend-app-account and frontend-app-payment most significantly) and we feel it has improved the organization and approachability of the apps. When converting frontend-app-account to use this organization, it took 2-3 days to refactor the code.

It's worth noting that to get this right, it may actually involve changing the way the modules interact with each other. It isn't as simple as just moving files around and copy/pasting code. For instance, in frontend-app-account, it became obvious very quickly that to create strict module boundaries, we had to change the way that our service layers (server requests) were configured to keep them from importing their own configuration from their parent/grandparent. Similarly, our redux store tree of reducers became more complex and deeply nested.

References
----------

Articles on react/redux multiple store organization:

  - https://react-redux.js.org/using-react-redux/accessing-store#multiple-stores)
