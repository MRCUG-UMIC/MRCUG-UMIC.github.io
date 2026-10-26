
---
title: Cluster Architecture
description: Overview of the UMIC high-performance computing infrastructure, compute resources, storage and workload management.
---

# Cluster Architecture

The UMIC HPC is set up to support computationally intensive biomedical research, bioinformatics, genomics, and artificial intelligence.

The infrastructure combines high-performance CPU computing, GPU-accelerated computing and high-capacity storage to support diverse scientific workloads.

## HPC Architecture Overview

![UMIC HPC cluster architecture](/img/umic-hpc-setup.png)

*Figure 1. Overview of the UMIC HPC infrastructure, illustrating researcher access, via the SSH gateway and login node, to the CPU and GPU compute nodes, and storage systems.*

## UMIC HPC Capacity at a Glance

| Infrastructure | Capacity |
|---|---|
| CPU compute nodes | **64** |
| Total CPU cores | **2,048** |
| Total system RAM | **16 TB** |
| GPU compute nodes | **4** |
| Total GPUs | **12 NVIDIA Tesla V100** |
| GPUs per GPU node | **3** |
| Total GPU memory | **384 GB** |
| Storage capacity | **Up to 400 TB** |

## CPU Computing Infrastructure

The UMIC HPC provides **64 CPU compute nodes**, delivering a combined **2,048 CPU cores** and **16 TB of RAM**.

This infrastructure supports computationally demanding workloads, including:

- Large-scale genomic data processing (e.g. whole-genome and whole-exome sequencing analysis)
- Population genetics
- RNAseq analysis
- Immunoinformatics
- Epidemiological modelling


The CPU infrastructure enables researchers to process large datasets and execute computational tasks across multiple compute nodes.

## GPU-Accelerated Computing

The HPC includes **4 GPU nodes**, each equipped with **3 NVIDIA Tesla V100 GPUs**, providing:

- **12 GPUs in total**
- **384 GB aggregate GPU memory**

GPU computing supports workloads that benefit from hardware acceleration, including machine learning, artificial intelligence, deep learning and selected bioinformatics applications such as modecular dynamics simulations.

Please consult the GPU computing documentation for guidance on requesting GPU resources and running GPU-enabled applications.

## Data Storage Infrastructure

The UMIC HPC provides **up to 400 TB of storage capacity**, supporting the management and analysis of large-scale research datasets.

The architecture diagram distinguishes between:

- **Short-term storage (Lustre):** Storage intended for active computational workloads and research data processing.
- **Long-term storage (NFS):** Storage intended for longer-term data management.

These storage systems support data-intensive applications, including genomic sequencing, multi-omics research and other biomedical datasets.

Please consult the Storage and File Management documentation for guidance on organising datasets, managing files and using available storage resources.

## Job Scheduling and Resource Allocation

Computational workloads are managed through the **SLURM workload manager**.

SLURM enables researchers to submit batch jobs, request computing resources, monitor running jobs and manage computational workloads.

Users can specify resource requirements such as CPU cores, memory, execution time and GPU resources, subject to the available cluster configurations and usage policies.

For practical instructions, see the SLURM Job Scheduling documentation.

## Research Applications

The UMIC HPC supports research and innovation across several scientific domains:

- Population genetics
- Infectious diseases
- Pathogen surveillance
- Microbiome research
- Structural bioinformatics
- Non-communicable diseases
- Maternal and child health


For technical assistance, please visit the [Support page](/support).
