# dart Vector

## Classes

```dart
Aabb2
Aabb3
Colors
Frustum
IntersectionResult
Matrix2
Matrix3
Matrix4
Obb3
Plane
Quad
Quaternion
Ray
SimplexNoise
Sphere
Triangle
Vector
Vector2
Vector3
Vector4
```

## Functions

```dart
absoluteError(dynamic calculated, dynamic correct) → double
buildPlaneVectors(Vector3 planeNormal, Vector3 u, Vector3 v) → void
catmullRom(double edge0, double edge1, double edge2, double edge3, double amount) → double
cross2(Vector2 x, Vector2 y) → double
cross2A(double x, Vector2 y, Vector2 out) → void
cross2B(Vector2 x, double y, Vector2 out) → void
cross3(Vector3 x, Vector3 y, Vector3 out) → void
degrees(double radians) → double
dot2(Vector2 x, Vector2 y) → double
dot3(Vector3 x, Vector3 y) → double
makeFrustumMatrix(double left, double right, double bottom, double top, double near, double far) → Matrix4
makeInfiniteMatrix(double fovYRadians, double aspectRatio, double zNear) → Matrix4
makeOrthographicMatrix(double left, double right, double bottom, double top, double near, double far) → Matrix4
makePerspectiveMatrix(double fovYRadians, double aspectRatio, double zNear, double zFar) → Matrix4
makePlaneProjection(Vector3 planeNormal, Vector3 planePoint) → Matrix4
makePlaneReflection(Vector3 planeNormal, Vector3 planePoint) → Matrix4
makeViewMatrix(Vector3 cameraPosition, Vector3 cameraFocusPosition, Vector3 upDirection) → Matrix4
mix(double min, double max, double a) → double
pickRay(Matrix4 cameraMatrix, num viewportX, num viewportWidth, num viewportY, num viewportHeight, num pickX, num pickY, Vector3 rayNear, Vector3 rayFar) → bool
radians(double degrees) → double
relativeError(dynamic calculated, dynamic correct) → double
setFrustumMatrix(Matrix4 perspectiveMatrix, double left, double right, double bottom, double top, double near, double far) → void
setInfiniteMatrix(Matrix4 infiniteMatrix, double fovYRadians, double aspectRatio, double zNear) → void
setModelMatrix(Matrix4 modelMatrix, Vector3 forwardDirection, Vector3 upDirection, double tx, double ty, double tz) → void
setOrthographicMatrix(Matrix4 orthographicMatrix, double left, double right, double bottom, double top, double near, double far) → void
setPerspectiveMatrix(Matrix4 perspectiveMatrix, double fovYRadians, double aspectRatio, double zNear, double zFar) → void
setRotationMatrix(Matrix4 rotationMatrix, Vector3 forwardDirection, Vector3 upDirection) → void
setViewMatrix(Matrix4 viewMatrix, Vector3 cameraPosition, Vector3 cameraFocusPosition, Vector3 upDirection) → void
smoothStep(double edge0, double edge1, double amount) → double
unproject(Matrix4 cameraMatrix, num viewportX, num viewportWidth, num viewportY, num viewportHeight, num pickX, num pickY, num pickZ, Vector3 pickWorld) → bool
```
