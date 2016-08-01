## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **LoginForm**
  * **SignupForm**
  * **PostIndex(Feed)**
    * Navbar
    * Search
    * PostForm
    * PostIndexItem

## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `PostIndex` **path:** dashboard
  * **component:** `PostIndexItem` **path:** post/postId
