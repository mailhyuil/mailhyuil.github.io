# kubectl api-resource

> api-resources들은 각각 version을 가지고 있다.
>
> > yaml 파일에 리소스를 생성할 때 그 apiVersion을 지정해야 한다.

## api-resources 출력

```sh
kubectl api-resources
```

## resources

```txt
NAME                                SHORTNAMES          APIVERSION                              NAMESPACED   KIND
bindings                                                v1                                      true         Binding
componentstatuses                   cs                  v1                                      false        ComponentStatus
configmaps                          cm                  v1                                      true         ConfigMap
endpoints                           ep                  v1                                      true         Endpoints
events                              ev                  v1                                      true         Event
limitranges                         limits              v1                                      true         LimitRange
namespaces                          ns                  v1                                      false        Namespace
nodes                               no                  v1                                      false        Node
persistentvolumeclaims              pvc                 v1                                      true         PersistentVolumeClaim
persistentvolumes                   pv                  v1                                      false        PersistentVolume
pods                                po                  v1                                      true         Pod
podtemplates                                            v1                                      true         PodTemplate
replicationcontrollers              rc                  v1                                      true         ReplicationController
resourcequotas                      quota               v1                                      true         ResourceQuota
secrets                                                 v1                                      true         Secret
serviceaccounts                     sa                  v1                                      true         ServiceAccount
services                            svc                 v1                                      true         Service
mutatingwebhookconfigurations                           admissionregistration.k8s.io/v1         false        MutatingWebhookConfiguration
validatingadmissionpolicies                             admissionregistration.k8s.io/v1alpha1   false        ValidatingAdmissionPolicyvalidatingadmissionpolicybindings                       admissionregistration.k8s.io/v1alpha1   false        ValidatingAdmissionPolicyBinding
validatingwebhookconfigurations                         admissionregistration.k8s.io/v1         false        ValidatingWebhookConfiguration
customresourcedefinitions           crd,crds            apiextensions.k8s.io/v1                 false        CustomResourceDefinition
apiservices                                             apiregistration.k8s.io/v1               false        APIService
controllerrevisions                                     apps/v1                                 true         ControllerRevision
daemonsets                          ds                  apps/v1                                 true         DaemonSet
deployments                         deploy              apps/v1                                 true         Deployment
replicasets                         rs                  apps/v1                                 true         ReplicaSet
statefulsets                        sts                 apps/v1                                 true         StatefulSet
selfsubjectreviews                                      authentication.k8s.io/v1beta1           false        SelfSubjectReview
tokenreviews                                            authentication.k8s.io/v1                false        TokenReview
localsubjectaccessreviews                               authorization.k8s.io/v1                 true         LocalSubjectAccessReview
selfsubjectaccessreviews                                authorization.k8s.io/v1                 false        SelfSubjectAccessReview
selfsubjectrulesreviews                                 authorization.k8s.io/v1                 false        SelfSubjectRulesReview
subjectaccessreviews                                    authorization.k8s.io/v1                 false        SubjectAccessReview
horizontalpodautoscalers            hpa                 autoscaling/v2                          true         HorizontalPodAutoscaler
cronjobs                            cj                  batch/v1                                true         CronJob
jobs                                                    batch/v1                                true         Job
certificatesigningrequests          csr                 certificates.k8s.io/v1                  false        CertificateSigningRequestleases                                                  coordination.k8s.io/v1                  true         Lease
endpointslices                                          discovery.k8s.io/v1                     true         EndpointSlice
events                              ev                  events.k8s.io/v1                        true         Event
flowschemas                                             flowcontrol.apiserver.k8s.io/v1beta3    false        FlowSchema
prioritylevelconfigurations                             flowcontrol.apiserver.k8s.io/v1beta3    false        PriorityLevelConfiguration
storageversions                                         internal.apiserver.k8s.io/v1alpha1      false        StorageVersion
nodes                                                   metrics.k8s.io/v1beta1                  false        NodeMetrics
pods                                                    metrics.k8s.io/v1beta1                  true         PodMetrics
clustercidrs                        cc                  networking.k8s.io/v1alpha1              false        ClusterCIDR
ingressclasses                                          networking.k8s.io/v1                    false        IngressClass
ingresses                           ing                 networking.k8s.io/v1                    true         Ingress
ipaddresses                         ip                  networking.k8s.io/v1alpha1              false        IPAddress
networkpolicies                     netpol              networking.k8s.io/v1                    true         NetworkPolicy
runtimeclasses                                          node.k8s.io/v1                          false        RuntimeClass
poddisruptionbudgets                pdb                 policy/v1                               true         PodDisruptionBudget
clusterrolebindings                                     rbac.authorization.k8s.io/v1            false        ClusterRoleBinding
clusterroles                                            rbac.authorization.k8s.io/v1            false        ClusterRole
rolebindings                                            rbac.authorization.k8s.io/v1            true         RoleBinding
roles                                                   rbac.authorization.k8s.io/v1            true         Role
podschedulingcontexts                                   resource.k8s.io/v1alpha2                true         PodSchedulingContext
resourceclaims                                          resource.k8s.io/v1alpha2                true         ResourceClaim
resourceclaimtemplates                                  resource.k8s.io/v1alpha2                true         ResourceClaimTemplate
resourceclasses                                         resource.k8s.io/v1alpha2                false        ResourceClass
priorityclasses                     pc                  scheduling.k8s.io/v1                    false        PriorityClass
volumesnapshotclasses               vsclass,vsclasses   snapshot.storage.k8s.io/v1              false        VolumeSnapshotClass
volumesnapshotcontents              vsc,vscs            snapshot.storage.k8s.io/v1              false        VolumeSnapshotContent
volumesnapshots                     vs                  snapshot.storage.k8s.io/v1              true         VolumeSnapshot
csidrivers                                              storage.k8s.io/v1                       false        CSIDriver
csinodes                                                storage.k8s.io/v1                       false        CSINode
csistoragecapacities                                    storage.k8s.io/v1                       true         CSIStorageCapacity
storageclasses                      sc                  storage.k8s.io/v1                       false        StorageClass
volumeattachments                                       storage.k8s.io/v1                       false        VolumeAttachment
```
