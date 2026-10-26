module.exports = {mainSidebar: [
 {type:'doc',id:'intro',label:'Documentation home'},
 {type:'category',label:'Getting started',collapsed:false,items:['getting-started/overview','getting-started/account','getting-started/connect','getting-started/first-job']},
 {type:'category',label:'Using the cluster',items:[{type:'doc',id:'cluster/architecture',label:'Cluster Architecture'},'cluster/slurm','cluster/storage','cluster/data-transfer','cluster/gpu']},
 {type:'category',label:'Software & environments',items:['software/modules','software/conda','software/containers']},
 {type:'category',label:'Research workflows',items:['workflows/genomics','workflows/python-r','workflows/nextflow']},
 {type:'category',label:'Support & policies',items:['support/troubleshooting','support/faq','policies/acceptable-use','policies/data-security']}
]};