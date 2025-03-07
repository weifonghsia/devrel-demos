/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NextRequest, NextResponse } from "next/server";
import { getAuth, DecodedIdToken } from 'firebase-admin/auth';
import { app } from "@/app/lib/firebase-server-initialization";

export async function getAuthenticatedUser(request: NextRequest): Promise<DecodedIdToken> {
  const token = request.headers.get('Authorization') || '';
  const decodedIdToken = await getAuth(app).verifyIdToken(token);
  return decodedIdToken;
};