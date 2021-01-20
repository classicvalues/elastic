#!/usr/bin/env python3

# Copyright (c) Facebook, Inc. and its affiliates.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.

import torchelastic.rendezvous.etcd_rendezvous as etcd_rdzv
from torchelastic.rendezvous import (
    RendezvousHandler,
    RendezvousHandlerFactory,
    RendezvousParameters,
)


def get_rendezvous_handler(rdzv_params: RendezvousParameters) -> RendezvousHandler:
    factory = RendezvousHandlerFactory()
    factory.register("etcd", etcd_rdzv.create_rdzv_handler)
    rdzv_handler = factory.create_rdzv_handler(rdzv_params)
    # Assert that string representation of rdzv handler is the same
    # as in registry
    assert rdzv_params.backend == rdzv_handler.get_backend()
    return rdzv_handler
